# Knights-Travails

create 8x8 game board
game board should represent the graph which should show each link from each space to another

create knight class
knight should contain a tree that lists all the possible future moves
typically there will be 8 possible moves, if knight is near edge though, this move should be null
use a breadth first search to determine where the required move is in the tree
then use depth first search to list out moves between root and the end move
print array of moves
