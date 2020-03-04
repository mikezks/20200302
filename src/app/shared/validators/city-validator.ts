import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateCity(control: AbstractControl): ValidationErrors | null {
    const validCities = [
        'Graz',
        'Hamburg'
    ];

    if (control.value && validCities.indexOf(control.value) === -1) {
        return {
            city: {
                actualValue: control.value,
                validCities
            }
        };
    }

    return null;
}

export function validateCityWithParams(validCities: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value && validCities.indexOf(control.value) === -1) {
            return {
                city: {
                    actualValue: control.value,
                    validCities
                }
            };
        }

        return null;
    };
}
