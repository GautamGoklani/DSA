#ifndef STACK_H
#define STACK_H

#include <iostream>
#include <vector>
#include <string>
using namespace std;

class StackClass
{
private:
    vector<string> items;

public:
    StackClass()
    {
        cout << "Enter 1 for Push\t Enter 2 for Pop\n";
        cout << "Enter 3 for Peek\t Enter 4 for IsEmpty\n";
        cout << "Enter 5 for Size\t Enter 6 for Clear\n";
        cout << "Enter 7 for Search\t Enter cls for clearing console\n";
        cout << "Enter exit for Exiting from Stack\n";
    }
    void push()
    {
        string item;
        cout << "Enter Item to push: ";
        cin >> item;
        this->items.push_back(item);
        cout << "Pushed the element succesfully.\n";
    }
    void pop()
    {
        int size = this->items.size();
        if (size > 0)
        {
            string popElement = this->items[size - 1];
            this->items.pop_back();
            cout << "Popped the Element " << popElement << " Successfully\n";
        }
        else
            cout << "Stack is already empty. No Element for Pop Operation.\n";
    }
    void peek()
    {
        int size = this->items.size();
        if (size > 0)
            cout << "The Top Value of the Stack is: " << this->items[size - 1] << "\n";
        else
            cout << "Stack is already Empty. There is No Element on the Top of the Stack\n";
    }
    void isEmpty()
    {
        int size = this->items.size() > 0;
        if (size > 0)
            cout << "Stack is Not Empty\n";
        else
            cout << "Stack is Empty\n";
    }
    void size()
    {
        int stackSize = this->items.size();
        stackSize > 0 ? cout << "Number of items in stack: " << stackSize << "\n" : cout << "Stack is Empty\n";
    }
    void clear()
    {
        int stackSize = this->items.size();
        if (stackSize > 0)
        {
            this->items.clear();
            cout << "Cleared Stack Succesfully\n";
        }
        else
            cout << "Stack is Already Empty\n";
    }
    void search()
    {
        string searchItem;
        if (this->items.size() > 0)
        {
            cout << "Enter Item to Search in String: ";
            cin >> searchItem;
            for (const string &item : this->items)
            {
                if (item == searchItem)
                {
                    cout << searchItem << " is there in the stack\n";
                    searchItem = "";
                    break;
                }
            }
            searchItem.length() > 0 && cout << searchItem << " is not there in the stack\n";
        }
        else
            cout << "Stack is Empty\n";
    }
};

#endif