import java.util.*;

public class assignmentArrangement {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int M = in.nextInt();
        for(int m = 0; m < M; m++) {
            int N = in.nextInt();
            // 动态规划，让任务工作时间最长的机器先运行，这样总体时间才最短啊
            int[] dp = new int[N]; // dp[i]第i台机器工作完的时间
            int last = 0; // 之前机器配置完成的时间
            int res = 0; //总时间
            int[][] machine = new int[N][2];  // 每组任务的N台机器的配置时间和工作时间
            for (int i = 0; i < N; i++) {
                int B = in.nextInt();
                int J = in.nextInt();
                machine[i][0] = B;
                machine[i][1] = J;
            }
            // lambda按第二元素降序排序，即按工作时间降序排序
            Arrays.sort(machine, (e1, e2) -> (e2[1] - e1[1]));
            for (int i = 0; i < N; i++) {
                dp[i] = last + machine[i][0] + machine[i][1];
                last += machine[i][0];
                res = Math.max(res, dp[i]);
            }
            System.out.println(res);
        }
    }
}
