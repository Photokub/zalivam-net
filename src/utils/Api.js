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
        return this._request(`${this._adress}/message`, {
            method: "GET",
            credentails: "include",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
    }
}

export const api = new Api({
    credentails: 'include',
    baseUrl: 'https://localhost:3001',
    headers: {
        "content-type": "application/json",
        'Accept': 'application/json',
    }
})
