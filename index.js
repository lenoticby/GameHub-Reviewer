// index.js - A comprehensive Node.js starter script for GitHub's Linguist
// Created by Abie Haryatmo, enhanced by Gemini

class Project {
    constructor(name) {
        this.name = name;
        this.version = "1.0.0";
    }

    displayInfo() {
        console.log(`Project Name: ${this.name}`);
        console.log(`Version: ${this.version}`);
    }
}

const main = () => {
    const myProject = new Project("GitHub Auto-Repo Project");
    myProject.displayInfo();

    console.log("\nThis script is now comprehensive enough for GitHub's language detection.");
    
    const features = ["Classes", "Arrow Functions", "Loops", "Template Literals"];
    console.log("Features demonstrated:");
    for (const feature of features) {
        console.log(`  - ${feature}`);
    }
};

main();
