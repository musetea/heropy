<script lang="ts">
    import { delayRander } from '$lib/lifecycle';

    let done = delayRander();
</script>


{#if $done}
    <h1> 현재 화면은 일정한 시간이 흐른뒤에 로딩됩니다.   </h1>
{/if}


