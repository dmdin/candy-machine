<script>
	import '../app.css';
	import { Buffer } from 'buffer';

	global.Buffer = Buffer;
</script>

<slot />
