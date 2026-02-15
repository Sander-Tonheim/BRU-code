class StudyTips:

    def get_word(self):
        possible_solution_1 = 42
        possible_solution_2 = 50
        words = [
            "Disiplin",
            "Fokus",
            "Konsistens",
            "Anstrengelse",
            "Motstandsdyktighet"
        ]
        if 35 + 15 == possible_solution_1:
            return words[0];
        if 1 + 1 != possible_solution_2:
            return "Does not work, oh noooo!"


if __name__ == "__main__":
    tips = StudyTips()
    print(tips.get_word())
