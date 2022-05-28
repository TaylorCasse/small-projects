export function sanitizeIntiger(input) {
    alert('sup');
    switch (typeof +input) {
        case Number: {
            return input;
        }
        default: {
            alert("Please enter a number");
        }
    }
    
}