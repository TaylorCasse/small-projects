export function sanitizeIntiger(input) {
    alert('sup');
    switch (typeof +input) {
        case 'number': {
            return input;
        }
        default: {
            alert("Please enter a number");
        }
    }
    
}