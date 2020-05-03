
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
            .catch(e => ({ error: e }));
    }
}
// インスタンス化してオブジェクトをexport
const prefApi = new PrefApi();
export default prefApi;
