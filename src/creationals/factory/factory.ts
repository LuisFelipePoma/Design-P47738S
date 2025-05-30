type ButtonClickHandler = () => void;

abstract class Button {
	abstract onClick(f: ButtonClickHandler): void;
	abstract render(): void;
}

class WindowsButton extends Button {
	render(): void { console.log("Render Windows button"); }
	onClick(f: ButtonClickHandler): void { console.log("Bind Windows event"); }
}

class HTMLButton extends Button {
	render(): void { console.log("Render HTML button"); }
	onClick(f: ButtonClickHandler): void { console.log("Bind browser event"); }
}

abstract class Dialog {
	abstract createButton(): Button;

	render(): void {
		const button: Button = this.createButton();
		button.onClick(() => console.log("Closing dialog"));
		button.render();
	}
}

class WindowsDialog extends Dialog {
	createButton(): Button {
		return new WindowsButton();
	}
}

class WebDialog extends Dialog {
	createButton(): Button {
		return new HTMLButton();
	}
}

// Simulando cliente:
interface Config {
	OS: "Windows" | "Web";
}

const config: Config = { OS: "Web" };
let dialog: Dialog = config.OS === "Windows" ? new WindowsDialog() : new WebDialog();
dialog.render();