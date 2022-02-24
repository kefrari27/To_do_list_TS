export class Event {

  click(btn: any, event: any): void {
    document.getElementById(btn).addEventListener('click', event);
  }

  getValue(element: any): any {
    return document.querySelector(element).value;
  }

  clearForm(element: any): void {
    let form = <HTMLFormElement> document.getElementById(element);
    form.reset();
  }

  getContainer(element: any): any {
    return document.getElementById(element);
  }
}