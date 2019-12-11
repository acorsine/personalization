import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteractService {

  constructor(private http: HttpClient) {
  }

  getInteractLayout() {
    var body = {
      "sessionId": "58190615",
      "commands": [
        {
          "action": "startSession",
          "audienceID": [{ "v": "58190615", "t": "string", "n": "NR_PESS" }],
          "audienceLevel": "Cliente",
          "ic": "MEI",
          "relyOnExistingSession": false,
          "parameters": [],
          "debug": false
        },
        {
          "action": "getOffersForMultipleInteractionPoints",
          "getOfferRequests": [
            {
              "dupPolicy": 1, "numberRequested": 1, "ip": "Content_1",
              "offerAttribReq": {
                "numberRequested": 1,
                "attributes": []
              }
            },
            {
              "dupPolicy": 1, "numberRequested": 1, "ip": "Content_2",
              "offerAttribReq": {
                "numberRequested": 1,
                "attributes": []
              }
            },
            {
              "dupPolicy": 1, "numberRequested": 1, "ip": "Content_3",
              "offerAttribReq": {
                "numberRequested": 1,
                "attributes": []
              }
            },
            {
              "dupPolicy": 1, "numberRequested": 1, "ip": "Content_4",
              "offerAttribReq": {
                "numberRequested": 1,
                "attributes": []

              }
            }
          ]
        }
      ]
    };

    const url = `http://localhost:4200/api/interact/servlet/RestServlet`;
    return this.http.post(url, body);
  }
}
