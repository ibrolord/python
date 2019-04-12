#!/usr/bin/python3
class Rob:
    def __init__(self):
        pass

    def walk(self, walk):
        self.walk = walk
        return self.walk

    def care(self):
        print("takes care like a robot")


class Hum:
    def __init__(self, nature = "good"):
        self.nature = nature

        def goodh(self):
            print("need not repeat, a good human being is always", self.nature)

        def badh(self):
            self.nature = "need not repeat, bad human being is always bad"
            print(self.nature)

        def walk(self, walk):
            self.walk = walk
            return self.walk

def main():
    robu = Rob()
    goodm = Hum()
    badm = Hum ()
    whenab = badm.walk(dict(change='he becomes a monster inside', act='he kills fellow people', feel='he enjoys torturing animals', care='he cares for none', look='he looks a normal human being', state='finally he destroys himself'))
    print("What happens when a Bad Man walks like a Robot?")
    change = input(
        "Tell us what kind of change may take place inside him?\n Choose whether 'monster' and 'angel',"  "and type here...>>>>")
    whenab['change'] = change
    reward = 0
    if change == 'monster':
        print("You have won the first round:", change)
        reward = 1000
        print("You have won ", reward, "points.")
        print("what does he do? :", whenab['act'])
        change = input(
            "Now tell us what the monster feels inside while killing people?\n Choose between 'great' and 'sad',"  "and type here...>>>")
        whenab['change'] = change
        if change == 'great':
            print("You have won the secong round:")
            reward = 10000
            print("You have won ", reward, "points.")
            print("What he feels inside? :", whenab['feel'])
            change = input("Tell us does the monster care for anyone?\n Choose between 'yes' and 'no'," "and type here...>>>>")
            whenab['change'] = change
            if change == 'no':
                    print("You have won the third round:")
                    reward = 100000
                    print("You have won ", reward, "points")
                    print("what he feels inside? :", whenab['care'])
                    change = input(
                        "tells us does the monster look like a normal human being?\n Choose between 'yes' and 'no'," "and type here...>>>>")
                    whenab['change'] = change
                    if change == 'yes':
                        print("You have won the fourth round:")
                        reward = 1000000
                        print("You have won ", reward, "points.")
                        print("What does he look like?:", whenab['look'])
                        change = input(
                            "Tell us what happens to the monster finally? Does he destroy himself to the monster finally? Does he destroy himself\n Choose between 'yes' and 'no'," "and type here...>>>>")
                        whenab['change'] = change
                        if change == 'yes':
                            print("You have won the 5th round:")
                            reward = 100000000
                            print("You have won Jackpot.",
                                  reward, "points.")
                        else:
                            print(
                                "You have changed the course of game. it ends here. You have lost", reward - 100000, "pounts.")
                    else:
                        print(
                            "You have changed the course of game. It ends here. You have lost", reward - 1000, "points.")
            else:
                    print(
                        "You have changed the course of the game. It ends here. You have lost", reward - 100, "points.")
        else:
                print(
                    "You have changed the course of game. It ends here. You have lost", reward - 10, "points.")
    else:
            print(
                "You have changed the course of game. It ends here and you have won no point.")
if __name__ == "__main__":
    main()
