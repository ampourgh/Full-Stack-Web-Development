// Main.java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class Main {

    public static void main(String[] args) throws IOException {

        int n = 3;
        long ans;

        ArrayList<Long>[] al = new ArrayList[n];
        al[0] = new ArrayList<Long>(Arrays.asList(1L, 2L, 2L, 4L));
        al[1] = new ArrayList<Long>(Arrays.asList(1L, 3L, 9L, 9L, 27L, 81L));
        al[2] = new ArrayList<Long>(Arrays.asList(1L, 5L, 5L, 25L, 125L));

        ArrayList<Long> r = new ArrayList<Long>(Arrays.asList(2L, 3L, 5L));

        for (int i = 0; i < n; i++) {
          System.out.printf("Sample Input %s: \n%s\n%s", i, r.get(i), al[i]);
          ans = Solution.countTriplets(al[i], r.get(i));
          System.out.printf("\nSample Output %s: \n%s\n\n", i, ans);
        }

    }

}

// Solution.java
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class Solution {

    static long countTriplets(List<Long> arr, long r) {

        Map<Long, Long> rr = GetOccurence.Map(arr);
        Map<Long, Long> ll = new TreeMap<>();
        long numberOfGeometricPairs = 0;

        for (long val : arr) {

          long countLeft = 0;
          long countRight = 0;
          long lhs = 0;
          long rhs = val * r;

          if (val % r == 0) {
              lhs = val / r;
          }

          Long occurence = rr.get(val);
          rr.put(val, occurence - 1L);

          if (rr.containsKey(rhs)) {
              countRight = rr.get(rhs);
          }

          if (ll.containsKey(lhs)) {
              countLeft = ll.get(lhs);
          }

          numberOfGeometricPairs += countLeft * countRight;
          InsertInto.Map(ll, val);

        }

        return numberOfGeometricPairs;

    }

}

public class GetOccurence {

  private static Map<Long, Long> Map(List<Long> test) {

      Map<Long, Long> occurenceMap = new TreeMap<>();

      for (long val : test) {
          insertIntoMap(occurenceMap, val);
      }

      return occurenceMap;
  }

}

public class InsertInto {

  private static void Map(Map<Long, Long> occurenceMap, Long val) {

      if (!occurenceMap.containsKey(val)) {
          occurenceMap.put(val, 1L);
      } else {
          Long occurence = occurenceMap.get(val);
          occurenceMap.put(val, occurence + 1L);
      }

  }

}
