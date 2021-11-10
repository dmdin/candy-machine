<script lang='ts'>
	import { alertMsg } from '../stores';
	import { AlertType } from '../types';
</script>

{#if $alertMsg}
	<div class='alert'
			 class:alert-success={$alertMsg.severity === AlertType.Success}
			 class:alert-error={$alertMsg.severity === AlertType.Error}
	>
		<div class='flex-1'>
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' class='w-6 h-6 mx-2 stroke-current'>
				{#if $alertMsg.severity === AlertType.Success}
					<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
								d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path>
				{:else }
					<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
								d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'></path>
				{/if}
			</svg>
		</div>
	</div>
{/if}