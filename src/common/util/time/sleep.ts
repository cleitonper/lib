/**
 * Aguarda uma determinada quantidade de tempo
 * para executar uma ação.
 *
 * Esta função normalmente será usada para testes
 * ou mocks que simulam uma chamada http, por exemplo.
 *
 * @param time Quantidade de tempo, em `ms`, para finalização da espera
 * @returns Retorna uma promise que é resolvida após o tempo determinado em `time`
 */
export const sleep = (time: number) => {
  return new Promise(
    (resolve) => {
      setTimeout(() => {
        resolve(null);
      }, time);
    }
  );
};
