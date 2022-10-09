import GenericService from "../service/generic";

export const getFood = (page: number) => {
    return new Promise(async (resolved, rejected) => {
      try {
        const service = new GenericService(`foods/get?page=${page}`);
        service.get()
          .then((response: any) => {
              resolved(response.data.data);
          });
      } catch (error: any) {
        console.log(error)
        rejected(error)
      }
    });
  }