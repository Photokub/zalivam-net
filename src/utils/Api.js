class Api {
    constructor(setting) {
        this._adress = setting.baseUrl;
        this._headers = setting.headers
    }

    _request(url, options) {
        return fetch(url, options).then(this._handleResp)
    }

    _handleResp(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status} - ${res.ststusText}`)
        }
        return res.json()
    }

    sendMessage({ name, email, message }) {
        return this._request(`${this._adress}/mail`, {
            method: "POST",
            credentails: "include",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
    }

    sendCallBackMessage({ name, phone }) {
        return this._request(`${this._adress}/cb`, {
            method: "POST",
            credentails: "include",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                phone: phone,
            })
        })
    }
}

export const api = new Api({
    credentails: 'include',
    // baseUrl: 'https://centrprosto.ru/api',
    baseUrl: 'http://51.250.18.36:3001',
    //baseUrl: 'http://localhost:3001',
    headers: {
        "content-type": "application/json",
        'Accept': 'application/json',
    }
})
