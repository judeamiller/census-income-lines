from argparse import ArgumentParser
import pandas as pd
import json


def main(infile, outfile):
    data = pd.read_excel(infile, header=1, skiprows=[0, 3], skipfooter=11)

    data.fillna(0, inplace=True)
    # data = data.columns.round(0)

    result = data.to_json(orient="index")

    with open(outfile, "w") as newfile:
        newfile.write(result)


if __name__ == "__main__":
    parser = ArgumentParser()
    parser.add_argument("-i", "--infile", required=True, help="path to input xls file")
    parser.add_argument(
        "-o", "--outfile", required=True, help="location to save json export"
    )
    args = parser.parse_args()

    main(args.infile, args.outfile)