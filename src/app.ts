// ========= Constants =========
// HTML for burger and for close
const burgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
`
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`

// tailwind classes for burger
const LEFT_FULL = `-left-full`
const LEFT_0 = `left-0`
const OVERFLOW_HIDDEN = `overflow-hidden`
const OVERFLOW_AUTO = `overflow-y-auto`

// ========= HTML element =========
const $body = document.body // body element
const $burger = document.getElementById(`burger`) // icon for burger (header)
const $menu = document.getElementById(`menu`) // menu for burger (header)

// ========= Functions =========
const createBurger = ($menu: HTMLElement, $icon: HTMLElement): void => {
	$icon.addEventListener(`click`, (event: Event) => {
		// body
		if ($body.classList.contains(OVERFLOW_AUTO)) {
			// replace overflow-y-auto with overflow hidden
			$body.classList.remove(OVERFLOW_AUTO)
			$body.classList.add(OVERFLOW_HIDDEN)
		} else {
			// replace overflow-hidden with overflow-y auto (can scroll again)
			$body.classList.remove(OVERFLOW_HIDDEN)
			$body.classList.add(OVERFLOW_AUTO)
		}

		// menu
		if ($menu.classList.contains(LEFT_FULL)) {
			// come back menu
			$menu.classList.remove(LEFT_FULL)
			$menu.classList.add(LEFT_0)
		} else {
			// hide menu
			$menu.classList.remove(LEFT_0)
			$menu.classList.add(LEFT_FULL)
		}

		//icon
		if ($icon.dataset.is_active === `false`) {
			$icon.innerHTML = closeIcon

			$icon.dataset.is_active = `true` // switch burger state
		} else {
			$icon.innerHTML = burgerIcon
			$icon.dataset.is_active = `false` // switch burger state
		}
		event.preventDefault()
	})
}

if ($menu && $burger) {
	createBurger($menu, $burger)
}
