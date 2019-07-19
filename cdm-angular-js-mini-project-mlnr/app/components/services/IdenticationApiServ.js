  app.factory('IdenticationApi',['md5', function (md5) {
      return {
              timestamp: Date.now(),
              privateKey: '822c550baafdb5407b8533500fb1b3d97a847a57',
              publicKey: '55ea896d183934f4b00f96a406fe84f5',
              hash: function () {
                  return md5.createHash(this.timestamp + this.privateKey + this.publicKey)
              },
              config: angular.IRequestShortcutConfig = {
                  headers: {
                      "Content-Type": "application/json"
                  }
              }
        }
  }]);
