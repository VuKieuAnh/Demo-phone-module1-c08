let dt1= new Mobile("Thanh");
let dt2= new Mobile("Tri");

function typeDraft1() {
    let daft = document.getElementById("draft1").value;
    dt1.typeDaft(daft);
}
function typeDraft2() {
    let daft = document.getElementById("draft2").value;
    dt2.typeDaft(daft);
}

function sendMess1() {
    dt1.send(dt2);
    document.getElementById("inboxTri").innerText = dt1.inbox.join();
    document.getElementById("inboxThanh").innerText = dt2.inbox.join();
}
function sendMess2() {
    dt2.send(dt1);
    document.getElementById("inboxThanh").innerText = dt2.inbox.join();
    document.getElementById("inboxTri").innerText = dt1.inbox.join();
}
