<script>
	import '../app.postcss';
	import { Buffer } from 'buffer';

	global.Buffer = Buffer;
</script>

<slot />
