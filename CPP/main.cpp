#include <iostream>
#include "./logic/ReusableFunctions.h"
#include "./logic/Stack.h"
#include "./UserChoiceRedirection.cpp"

using namespace std;
int main()
{
    ReusableFunctions askUserChoice;
    UserChoiceRedirection callDsa;
    askUserChoice.logChoiceList();
    while (true)
    {
        string userChoice = askUserChoice.takeInput("Enter Your Choice: ");
        if (userChoice == "cls")
        {
            system("cls");
            askUserChoice.logChoiceList();
        }
        else if (userChoice == "1")
        {
            callDsa.stack();
        }
        else if (userChoice == "exit")
        {
            exit(1);
        }
    }
}