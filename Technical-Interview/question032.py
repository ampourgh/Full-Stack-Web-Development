"""
Climbing the Leaderboard

Alice is playing an arcade game and wants to climb to the top of the leaderboard. 
Can you help her track her ranking as she beats each level? 
The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, 
and the next player(s) receive the immediately following ranking number.
For example, four players have the scores 100, 90, 90, and 80. Those players will have ranks 1, 2, 2, and 3, respectively.

When Alice starts playing, there are already people on the leaderboard. 
Alice plays for m levels, and we denote her total score after passing each level j as alice.
After completing each level, Alice wants to know her current rank.

Sample Input:

100 100 50 40 40 20 10
5 25 50 120

Sample Output:

6
4
2
1
"""

def climbingLeaderboard(scores, alice):
  
  ranking = []
  prevScore = None
  rank = 1
  strScore = ''
  for score in scores:
    strScore = str(rank) + str(score)
    if prevScore:
      if score != prevScore: 
        ranking.append(strScore)
        rank += 1
    else:
      ranking.append(strScore)
      rank += 1
    prevScore = score
  print(ranking)
  
  rankingRev = ranking[::-1]
  print(rankingRev)
    
  i = 0
  upRank = len(ranking)
  for aliceScore in alice:
    if  aliceScore < int(rankingRev[i][1:]):
      print(upRank + 1)
    else:
      while aliceScore > int(rankingRev[i][1:]):
        i += 1
        if int(rankingRev[i][0:1]) == 1:
          if aliceScore == int(rankingRev[i][1:]) or aliceScore > int(rankingRev[i][1:]):
            print(int(rankingRev[i][0:1]))
          elif aliceScore < int(rankingRev[i][1:]):
            print(int(rankingRev[i][0:1]) + 1)
          return True
        elif aliceScore == int(rankingRev[i][1:]):
          print(int(rankingRev[i][0:1]))
        elif aliceScore < int(rankingRev[i][1:]):
          print(int(rankingRev[i][0:1]) + 1)
    
  
scores = [100, 100, 50, 40, 40, 20, 10]
alice = [5, 25, 50, 120]
climbingLeaderboard(scores, alice)
