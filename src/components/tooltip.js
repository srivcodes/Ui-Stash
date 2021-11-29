export const Tooltip = () => {
    return(
        <section className="--text">
        <h2 className="colored-text">Tooltip</h2>
        <p>
          Text Utilities are self-descriptive, single-purpose CSS classes for
          styling the text.{" "}
        </p>
        <body style={{textAlign:"center"}}>
        <p className="colored-text heading">Sample Tooltip</p>
        <div className="tooltip">Tooltip content
        <span className="tooltiptext">Tooltip text</span>
        </div>
        <br/>
        <p className="colored-text heading">can be further used for multiple scenarios as shown below</p>
        <div className="tooltip"><i class="fas fa-copy"></i>
        <span className="tooltiptext">Copy</span>
        </div><br/><br/>
        <div className="tooltip"><i class="fas fa-align-right"></i>
        <span className="tooltiptext">Right Align</span>
        </div><br/><br/>
        <div className="tooltipTerms">Terms and conditions <i class="fas fa-info-circle"></i>
        <span className="tooltiptextTerms"><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</div></span>
        </div><br/><br/><br/><br/>
        </body>
      </section>
    );
}