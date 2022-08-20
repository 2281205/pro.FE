You have array of Users in which every User has fields [username, team, score, items].

var users = [
 ["john","red",5,["ball", "book", "pen"]],
 ["becky","blue",10,["tape", "backpack", "pen"]],
 ["susy","red",55,["ball", "eraser", "pen"]],
 ["tyson","green",1,["book", "pen"]],
];
Task:

1. Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].

2. Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].

3. Filter the original array of users to only include users who are on team: red.

4. In filtered array find out the total score of all filtered users and print all user's data into table with <tfoot>Final summ</tfoot> tag.
