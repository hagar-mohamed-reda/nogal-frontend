export class Cache {

    private static CACHE_KEY = 'nogal_';

    /**
     * store data in locale storage
     *
     * @param key name
     * @param data
     */
    public static set(key: any, data: any) {
      data = JSON.stringify(data);
      data  = Cache.crypt(data);
      localStorage.setItem(Cache.CACHE_KEY + key, data);
    }

    public static crypt(data: any) {
      let crypt: any = "";
      for(let i = 0; i < data.length; i ++) {
        crypt += data.charCodeAt(i) + "o";
      }

      return crypt;
    }

    public static decrypt(data: any) {
      let crypt: any = data.split("o");
      let decrypt: any = "";
      for(let i = 0; i < crypt.length; i ++) {
        decrypt += String.fromCharCode(crypt[i]);
        //crypt += data.charCodeAt(i) + "o";
      }

      return decrypt;
    }

    /**
     * remove key with its data from cache
     *
     * @param key
     */
    public static remove(key: any) {
      localStorage.removeItem(Cache.CACHE_KEY + key);
    }

    /**
     * get data from cache
     *
     * @param key
     */
    public static get(key: any) {
      const data: any = localStorage.getItem(Cache.CACHE_KEY + key);
      let d: any = Cache.decrypt(data);
      return JSON.parse(d);
    }

    /**
     * check if the cache has value
     *
     * @param key
     */
    public static has(key: any) {
      const data = localStorage.getItem(Cache.CACHE_KEY + key);
      return (data != null) ? true : false;
    }



  }
