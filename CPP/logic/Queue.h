#ifndef QUEUE_H
#define QUEUE_H
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class QueueClass
{
private:
    vector<string> items;
    int first = 0;

public:
    QueueClass()
    {
        cout << "Enter 1 for EnQueue\t Enter 2 for DeQueue\n";
        cout << "Enter 3 for Peek\t Enter 4 for IsEmpty\n";
        cout << "Enter 5 for Size\t Enter 6 for Clear\n";
        cout << "Enter 7 for Search\t Enter cls for clearing console\n";
        cout << "Enter exit for Exiting from Queue\n";
    }
    void enQueue()
    {
        string item;
        cout << "Enter Element for the End of the queue: ";
        cin >> item;
    }
    void deQueue()
    {
    }
    void peek()
    {
    }
    void isEmpty()
    {
    }
    void size()
    {
    }
    void clear()
    {
    }
    void search()
    {
    }
};

#endif