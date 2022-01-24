<script>
    
    import { navigating } from '$app/stores';
    import * as NProgress from '$lib/nprogress'
    import { afterNavigate,beforeNavigate } from '$app/navigation'
    import PreloadingIndicator from '$lib/PreloadingIndicator.svelte';
    import { API_BASE } from '$lib/env';

    afterNavigate(async ({ from, to }) => {
	// console.log(`afterNavigate to navigate from ${from} to ${to.href}`);
    NProgress.done()
	// cancel or allow the navigation in the return statement
	return false;
	});

	beforeNavigate(async ({ from, to }) => {
	// console.log(`beforeNavigate to navigate from ${from.href} to ${to.href}`);
    NProgress.start()

	// cancel or allow the navigation in the return statement
	return false;
	});
</script>

<a href="/">home</a>
<a href="/a">aaaaa</a>
<slot></slot>