export class StorageUtil {

  //Save data to session storage.
  public static sessionStorageSave<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  //Read data from session storage.
  public static sessionStorageRead<T>(key: string): T | undefined {
    const storedValue = sessionStorage.getItem(key); //Retrieve the stored value from session storage.
    try {
      if (storedValue) {
        return JSON.parse(storedValue) as T; //Parse the stored JSON value and cast it to the specified type 'T'.
      }
      return undefined;
    } catch (err) {
      sessionStorage.removeItem(key); //Remove invalid data from session storage, if there is an error parding the JSON.
      return undefined; //Return underfined to indicate that the data is invalid.
    }
  }

  //Save data to local storage.
  public static localStorageSave<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  //Read data from local storage.
  public static localStorageRead<T>(key: string): T | undefined {
    const storedValue = localStorage.getItem(key); //Retrieve the stored value from local storage.
    try {
      if (storedValue) {
        return JSON.parse(storedValue) as T;
      }
      return undefined;
    } catch (err) {
      localStorage.removeItem(key);
      return undefined;
    }
  }

  //Delete data from local storage.
  public static localStorageDelete<T>(key: string): T | void {
    localStorage.removeItem(key);
  }
}
