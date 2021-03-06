// node  --experimental-modules src/api/pref.mjs
// これで実行すること．
import axios from 'axios'

class PrefApi {
    constructor() {
        // ベースとなるURLを設定
        this.apiBase = 'http://13.231.104.134'
    }

    // 一覧取得
    prefs() {
        // pref_list取得
        return axios.get(`${this.apiBase}/items`)
            .then(json => {
                // 取得したデータはdataプロパティに配置されるね。
                return json.data;
            })
            .catch(e => ({ error: e }))
    }
}
// インスタンス化してオブジェクトをexport
const prefApi = new PrefApi();
const doAsync = async () => {
    let ramen;
    try {
        ramen = await axios.get('http://13.231.104.134/items'); // 全マシができるまで待つ
    } catch (err) {
        console.log(err.message);
        throw err;
    }

    console.log(ramen["data"]);
};
//doAsync();
console.log(prefApi.prefs());
export default prefApi;
