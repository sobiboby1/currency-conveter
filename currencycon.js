const countrylist = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    CAD: "CA",
    CDF: "CD",
    CHF: "CH",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DKK: "DK",
    DZD: "DZ",
    EGP: "EG",
    EUR: "FR",
    GBP: "GB",
    JPY: "JP",
    PKR: "PK",
    RUB: "RU",
    USD: "US",
    VND: "VN",
    ZAR: "ZA",
};

const dropmenuFrom = document.querySelector(".from select");
const dropmenuTo = document.querySelector(".to select");

for (let code in countrylist) {
    let newOptionFrom = document.createElement("option");
    newOptionFrom.innerText = code;
    newOptionFrom.value = code;
    dropmenuFrom.append(newOptionFrom);

    let newOptionTo = document.createElement("option");
    newOptionTo.innerText = code;
    newOptionTo.value = code;
    dropmenuTo.append(newOptionTo);
}
