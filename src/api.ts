export interface User {
    name: string;
    email: string;
    age: number;
  }
  
  export const getUser = async (path: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const outcome = Math.random() > 0.5;
        if (outcome) {
          resolve({ name: "Jesse", email: "jesse@mail.com", age: 29 });
        } else {
          reject(new Error("could not get user"));
        }
      }, 3000);
    });
  };