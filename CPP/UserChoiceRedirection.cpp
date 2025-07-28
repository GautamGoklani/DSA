#include <iostream>
#include <cctype>
#include <cstdlib>
#include "./logic/ReusableFunctions.h"
#include "./logic/Stack.h"

class UserChoiceRedirection
{

    ReusableFunctions userChoiceOperation;

public:
    void stack()
    {
        StackClass stackOperation;
        while (true)
        {
            string choiceOperation = userChoiceOperation.takeInput("Enter Operation for Stack: ");
            if (choiceOperation == "1")
            {
                stackOperation.push();
            }
            else if (choiceOperation == "2")
            {
                stackOperation.pop();
            }
            else if (choiceOperation == "3")
            {
                stackOperation.peek();
            }
            else if (choiceOperation == "4")
            {
                stackOperation.isEmpty();
            }
            else if (choiceOperation == "5")
            {
                stackOperation.size();
            }
            else if (choiceOperation == "6")
            {
                stackOperation.clear();
            }
            else if (choiceOperation == "7")
            {
                stackOperation.search();
            }
            else if (choiceOperation == "exit")
            {
                system("cls");
                userChoiceOperation.logChoiceList();
                return;
            }
            else if (choiceOperation == "cls")
            {
                system("cls");
                StackClass();
            }
            else
            {
                cout << "Invalid Choice!";
            }
        }
    }
    void queue()
    {
    }
};