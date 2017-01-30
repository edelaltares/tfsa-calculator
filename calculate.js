function calculate_tfsa() {
    var birthdate;
    var withdrawals;

    birthdate = document.getElementById("birthdate").value;
    withdrawals = document.getElementById("withdrawal").value;

    birthdate = birthdate.split("-");

    var year;

    year = birthdate[0];

    var today = new Date();
    var curr_year = today.getFullYear();

    year = Number(year) + 18;

    var room = Number(0);

    for(i = year; i<=curr_year; i++) {
        switch(i) {
            case 2009:
            case 2010:
            case 2011:
            case 2012:
                room += 5000;
                break;
            case 2013:
            case 2014:
            case 2016:
            case 2017:
                room += 5500;
                break;
            case 2015:
                room += 10000;
                break;
        }
    }
    
    room -= Number(withdrawals);

    document.getElementById("room").value = room.toLocaleString();
}
