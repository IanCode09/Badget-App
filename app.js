// BUDGET CONTROLLER
let budgetController = (function() {

})()



// UI CONTROLLER
let UIController = (function() {

    //Private
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                descriptio: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }            
        },

        //DOMstring menjadi public
        getDomstrings: function() {
            return DOMstrings;
        }
    }
    
})()



// GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    let DOM = UICtrl.getDomstrings();   //panggil getDomstrings dari UI Controller

    let ctrlAddItem = function() {

        // 1. Get the field input data
        let input = UICtrl.getInput()   
        console.log(input);

    }

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem)
    document.addEventListener('keypress', function(event) {
        if(event === 13 || event.which ===13) {
            ctrlAddItem()
        }
    })
    
})(budgetController, UIController)
