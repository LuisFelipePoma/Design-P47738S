// Interfaces
interface Button {
	render: () => void
}
interface Checkbox {
	toggle: () => void
}

// Productos concretos
class WindowsButton implements Button {
	render() { console.log("Render Windows Button"); }
}
class MacButton implements Button {
	render() { console.log("Render Mac Button"); }
}

class WindowsCheckbox implements Checkbox {
	toggle() { console.log("Toggle Windows Checkbox"); }
}
class MacCheckbox implements Checkbox {
	toggle() { console.log("Toggle Mac Checkbox"); }
}

// Fábrica abstracta
class GUIFactory {
	createButton() { }
	createCheckbox() { }
}

// Fábricas concretas
class WindowsFactory extends GUIFactory {
	createButton() { return new WindowsButton(); }
	createCheckbox() { return new WindowsCheckbox(); }
}

class MacFactory extends GUIFactory {
	createButton() { return new MacButton(); }
	createCheckbox() { return new MacCheckbox(); }
}

// Cliente
function renderUI(factory) {
	const btn = factory.createButton();
	const cb = factory.createCheckbox();
	btn.render();
	cb.toggle();
}

// Uso
const factory = new WindowsFactory(); // o new MacFactory()
renderUI(factory);
