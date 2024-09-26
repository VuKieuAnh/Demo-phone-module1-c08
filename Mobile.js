class Mobile {
    name;battery; draft; inbox; sent;

    constructor(name) {
        this.name = name;
        this.battery = 50;
        this.draft = "";
        this.inbox = [];
        this.sent = [];
    }

    typeDaft(mess){
        this.draft = mess;
        this.battery--;
    }

    send(mobile1){
    //     chuyen tin nhan nhap -> hop thu den cua dt khac
        mobile1.inbox.push(this.draft);
    //     chuyen tin nhan nhap -> hop thu da gui cua dt nay
        this.sent.push(this.draft);
        //     xoa tin nhap di
        this.draft="";
        this.battery--;
    }
}
