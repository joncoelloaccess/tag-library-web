import { Component, Prop, State } from "@stencil/core";
import {
  payWpFactory,
  PayWp,
  PayWpState,
  PayWpStates
} from "./tag-pay-wp.util";

const buttonColour = new Map()
  .set(PayWpStates.none, "default")
  .set(PayWpStates.halfDay, "glacier")
  .set(PayWpStates.fullDay, "viridian-green");

@Component({
  tag: "tag-pay-wp",
  styleUrl: "tag-pay-wp.scss",
  shadow: true
})
export class TagPayWp {
  @Prop() dayofweek: string;
  @Prop() value: string;
  @State() payWpMachine: PayWp = payWpFactory(PayWpStates.none);
  @State() state: PayWpState = this.payWpMachine.value;
  @State()
  workingPattern: Map<string, any> = new Map()
    .set(
      PayWpStates.none,
      <svg viewBox="0 0 132 28" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26.34 18A13.14 13.14 0 0 1 .75 13.87a13.13 13.13 0 0 1 25.59-4.12h79.14a13.14 13.14 0 0 1 25.55 4.23A13.13 13.13 0 0 1 105.41 18H26.34z"
          fill="none"
          stroke="#ced4d9"
          stroke-width="1.5"
        />
      </svg>
    )
    .set(
      PayWpStates.halfDay,
      <svg viewBox="0 0 132 28" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M65.89 9.64h39.59a13.14 13.14 0 0 1 25.55 4.23 13.13 13.13 0 0 1-25.62 4.03H65.89V9.64z"
          fill="none"
          stroke="#ced4d9"
          stroke-width="1.5"
        />
        <path
          d="M26.32 18.05A13.14 13.14 0 0 1 .75 13.87a13.13 13.13 0 0 1 25.6-4.07H65.9v8.25H26.32z"
          fill="#67c2c2"
          stroke="#67c2c2"
          stroke-width="1.5"
          stroke-linecap="butt"
          stroke-miterlimit="1.41"
        />
        <circle
          cx="65.89"
          cy="13.88"
          r="13.13"
          fill="#4eb8b5"
          stroke="#409794"
          stroke-width="1.5"
        />
      </svg>
    )
    .set(
      PayWpStates.fullDay,
      <svg viewBox="0 0 132 28" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26.34 18A13.14 13.14 0 0 1 .75 13.87a13.13 13.13 0 0 1 25.59-4.12H107V18H26.34z"
          fill="#66c2c2"
          stroke="#67c2c2"
          stroke-width="1.5"
        />
        <circle
          cx="117.91"
          cy="13.88"
          r="13.13"
          fill="#4eb8b5"
          stroke="#409794"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-miterlimit="1.5"
        />
      </svg>
    );

  changeState() {
    this.state = this.payWpMachine.transition().value;
    this.value = this.state.value;
  }

  render() {
    const progressImg = this.workingPattern.get(this.state.value);
    return (
      <div class="paywp">
        <div class="paywp__container">
          <tag-button
            class="paywp__button"
            accent={buttonColour.get(this.state.value)}
            onClick={() => this.changeState()}
          >
            {this.dayofweek}
          </tag-button>
          {progressImg}
        </div>
      </div>
    );
  }
}
