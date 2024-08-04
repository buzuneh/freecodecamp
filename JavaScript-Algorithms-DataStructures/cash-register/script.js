let price = 19.5; 
        let cid = [
            ["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
            ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]
        ];

        let currencyUnit = [
            ["PENNY", 0.01],
            ["NICKEL", 0.05],
            ["DIME", 0.1],
            ["QUARTER", 0.25],
            ["ONE", 1],
            ["FIVE", 5],
            ["TEN", 10],
            ["TWENTY", 20],
            ["ONE HUNDRED", 100]
        ];

        const cashInput = document.getElementById("cash");
        const changeDisplay = document.getElementById("change-due");
        const purchaseBtn = document.getElementById("purchase-btn");

        purchaseBtn.addEventListener("click", () => {
            const cashValue = parseFloat(cashInput.value);
            const changeDue = parseFloat((cashValue - price).toFixed(2));

            if (cashValue < price) {
                alert("Customer does not have enough money to purchase the item");
                return;
            }

            if (cashValue === price) {
                changeDisplay.innerText = "No change due - customer paid with exact cash";
                return;
            }

            const changeResult = getChange(changeDue, cid);

            if (changeResult.status === "INSUFFICIENT_FUNDS" || changeResult.status === "CLOSED") {
                changeDisplay.innerText = `Status: ${changeResult.status} ${formatChange(changeResult.changeDisplay)}`;
            } else {
                let changeText = `Status: ${changeResult.status} ${formatChange(changeResult.changeDisplay)}`;
                changeDisplay.innerText = changeText.trim();
            }
        });

        const getChange = (changeDue, cid) => {
            let totalCid = parseFloat(cid.reduce((acc, [_, amount]) => acc + amount, 0).toFixed(2));

            if (totalCid < changeDue) {
                return { status: "INSUFFICIENT_FUNDS", changeDisplay: [] };
            }

            let changeArray = [];
            let remainChange = changeDue;

            for (let i = currencyUnit.length - 1; i >= 0; i--) {
                let unit = currencyUnit[i][0];
                let unitValue = currencyUnit[i][1];
                let unitInDrawer = cid[i][1];

                if (unitValue <= remainChange && unitInDrawer > 0) {
                    let amountFromUnit = 0;
                    while (remainChange >= unitValue && unitInDrawer > 0) {
                        remainChange = parseFloat((remainChange - unitValue).toFixed(2));
                        unitInDrawer -= unitValue;
                        amountFromUnit += unitValue;
                    }
                    if (amountFromUnit > 0) {
                        changeArray.push([unit, amountFromUnit]);
                    }
                }
            }

            if (remainChange > 0) {
                return { status: "INSUFFICIENT_FUNDS", changeDisplay: [] };
            }

            if (changeDue === totalCid) {
                
                return { status: "CLOSED", changeDisplay:changeArray};
         
            }
   if(price < changeDue && totalCid === changeDue){
       return { status: "CLOSED", changeDisplay:changeArray};
   }         
if(price < changeDue && totalCid === changeDue){
       return { status: "CLOSED", changeDisplay:changeArray.reverse()};
   }         
            return { status: "OPEN", changeDisplay: changeArray };
        };

        const formatChange = changeArray => changeArray.map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`).join(" ");