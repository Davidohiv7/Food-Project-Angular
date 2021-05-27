export function getFormErrors(form:any) {
    let errors = []
    for (const prop in form.controls) {
        if(form.controls[prop].errors) {
            errors = [...errors, ...Object.values(form.controls[prop].errors)]
        }
    }
    return errors
}