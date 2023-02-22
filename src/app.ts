// ========= Constants =========
// HTML for burger and for close
const burgerIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
`
const closeIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
`

// -- tailwind classes --
// burger
const LEFT_FULL: string = `-left-full`
const LEFT_0: string = `left-0`
const OVERFLOW_HIDDEN: string = `overflow-hidden`
const OVERFLOW_AUTO: string = `overflow-y-auto`

// toggle
const TO_LEFT = `left-0`
const TO_RIGHT = `right-0`
const BG_OFF = `bg-[#2C3E3E]`
const BG_ON = `bg-[#0FAE96]`

// ========= HTML element =========
const $body = document.body // body element
const $burger = document.getElementById(`burger`) // icon for burger (header)
const $menu = document.getElementById(`menu`) // menu for burger (header)
const $toggleContainer = document.getElementById(`toggleContainer`)
const $toggleButton = document.getElementById(`toggleButton`)

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

function createToggle(
	$toggleContainer: HTMLElement,
	$toggleButton: HTMLElement
): void {
	$toggleContainer.addEventListener(`click`, () => {
		if ($toggleButton.dataset.status === `off`) {
			$toggleButton.classList.remove(TO_LEFT)
			$toggleButton.classList.remove(BG_OFF)
			$toggleButton.classList.add(TO_RIGHT)
			$toggleButton.classList.add(BG_ON)

			$toggleButton.dataset.status = `on`
		} else {
			$toggleButton.classList.remove(TO_RIGHT)
			$toggleButton.classList.remove(BG_ON)
			$toggleButton.classList.add(TO_LEFT)
			$toggleButton.classList.add(BG_OFF)

			$toggleButton.dataset.status = `off`
		}
	})
}

// ========= Main program =========
// implementing burger
if ($menu && $burger) {
	createBurger($menu, $burger)
}

// implementing toggle
if ($toggleContainer && $toggleButton) {
	createToggle($toggleContainer, $toggleButton)
}
