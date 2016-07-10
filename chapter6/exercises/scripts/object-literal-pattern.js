var player1 = {
    name: "Ratboy",
    position: "winger",
    age: 22,
    special_skills: ["spin","catch","speed"],
    getInfo: function() {
        return "Name:\t" + this.name + "\nPosition:\t" + this.position + "\nAge:\t" + this.age + "\nSkills\t" + this.special_skills;
    },
    getName: function() {
        return this.name;
    },
    getSkills: function () {
        return this.special_skills;
    }
};
