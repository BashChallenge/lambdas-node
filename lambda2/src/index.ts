export const handler = async (): Promise<Response | any> => {
  try {
    const message = "Hola! Esta es la segunda lambda";
    return console.log(`${message}\n`);
  } catch (err: any) {
    return console.log(`${JSON.stringify(err)}\n`);
  }
};

handler();
