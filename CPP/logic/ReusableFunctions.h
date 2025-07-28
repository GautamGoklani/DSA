#ifndef REUSABLEFUNCTIONS_H
#define REUSABLEFUNCTIONS_H

#include <iostream>
#include <string>
using namespace std;

class ReusableFunctions
{
public:
    string takeInput(string question)
    {
        string input;
        cout << question;
        cin >> input;
        return input;
    }
    void logChoiceList()
    {
        cout << "Enter 1 for Stack\t Enter 2 for Queue\n";
        cout << "Enter 3 for Stack With Linked List\t Enter 4 for Queue With Linked List\n";
        cout << "Enter cls for clearing console.\t Enter exit for Exiting from program.\n";
    }
};

#endif