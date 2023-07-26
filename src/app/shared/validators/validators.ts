import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(email);

    const errors = {
        email: {
            rules: 'Il faut une adresse e-mail valide',
        },
    };

    return !valid ? errors : null;
}


export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    console.log(password);

    if (password.length < 8) {
        return {
            password: {
                rules: 'Le mot de passe doit contenir au moins 8 caractères',
            },
        };
    }

    const uppercaseRegex = RegExp('[A-Z]');
    const lowercaseRegex = RegExp('[a-z]');
    const digitRegex = RegExp('[0-9]');

    if (!uppercaseRegex.test(password)) {
        return {
            password: {
                rules: 'Le mot de passe doit contenir au moins une majuscule',
            },
        };
    }

    if (!lowercaseRegex.test(password)) {
        return {
            password: {
                rules: 'Le mot de passe doit contenir au moins une minuscule',
            },
        };
    }

    if (!digitRegex.test(password)) {
        return {
            password: {
                rules: 'Le mot de passe doit contenir au moins un chiffre',
            },
        };
    }

    return null;
}

export function confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const confirmPassword = control.parent?.get('password')?.value;
    console.log(password, confirmPassword);

    if (password !== confirmPassword) {
        return {
            confirmPassword: {
                rules: "Les deux mots de passe doivent être identiques"
            }
        };
    }

    return null;

}

