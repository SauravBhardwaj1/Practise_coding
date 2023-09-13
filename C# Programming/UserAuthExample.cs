using System;
using System.Collections.Generic;

class Program
{
    static Dictionary<string, string> users = new Dictionary<string, string>();

    static void Main(string[] args)
    {
        // Add some hardcoded users (In practice, these would be fetched from a database)
        users["user1"] = "password1";
        users["user2"] = "password2";

        Console.WriteLine("Welcome to the User Authentication System");
        Console.WriteLine("---------------------------------------");

        bool isAuthenticated = false;
        int loginAttempts = 3;

        while (!isAuthenticated && loginAttempts > 0)
        {
            Console.Write("Enter your username: ");
            string username = Console.ReadLine();
            Console.Write("Enter your password: ");
            string password = Console.ReadLine();

            if (AuthenticateUser(username, password))
            {
                Console.WriteLine("Authentication successful. Welcome, " + username + "!");
                isAuthenticated = true;
            }
            else
            {
                loginAttempts--;
                Console.WriteLine("Authentication failed. " + loginAttempts + " login attempts remaining.");
            }
        }

        if (!isAuthenticated)
        {
            Console.WriteLine("Login attempts exceeded. Account locked.");
        }
    }

    static bool AuthenticateUser(string username, string password)
    {
        // Check if the username exists in our dictionary
        if (users.ContainsKey(username))
        {
            // Compare the provided password with the stored password (In practice, use password hashing)
            string storedPassword = users[username];
            return password == storedPassword;
        }

        return false; // Username not found
    }
}
