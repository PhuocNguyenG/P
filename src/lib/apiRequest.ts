import { Status } from "./enum";

export const apiLoginWithSocial = (data: any) => {
  return new Promise(async (resolve) => {
    const api_url = process.env.NEXT_PUBLIC_URL_API + "/login-social";

    const api_req_options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await (await fetch(api_url, api_req_options)).json();

    resolve(res);
  });
};

export const apiGetListCate = () => {
  return new Promise(async (resolve) => {
    try {
      const api_url =
        process.env.NEXT_PUBLIC_URL_API + "/type/get-list-type-with-quantity";

      const api_req_options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        next: { revalidate: 3600 },
      };

      const res = await (await fetch(api_url, api_req_options)).json();

      resolve(res.data);
    } catch (error) {
      resolve({ error });
    }
  });
};

export const apiProductsListByType = (cate: string) => {
  return new Promise(async (resolve) => {
    try {
      const api_url =
        process.env.NEXT_PUBLIC_URL_API + `/product/category/${cate}`;

      const api_req_options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        next: { revalidate: 3600 },
      };

      const res = await (await fetch(api_url, api_req_options)).json();

      if (res.statusCode == Status.OK) {
        resolve(res.listProduct);
      } else throw new Error("Can not get product!");
    } catch (error) {
      resolve({ error });
    }
  });
};
